import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { assembly, phase } from '../lib/construction'

type SceneProps = { progress: number; mobile: boolean; angle: number; onReady: () => void; onFailure: () => void }
type BeamProps = { position: [number, number, number]; size: [number, number, number]; material: THREE.Material; rotation?: [number, number, number] }
const box = new THREE.BoxGeometry(1, 1, 1)

function Beam({ position, size, material, rotation }: BeamProps) {
  return <mesh geometry={box} material={material} position={position} scale={size} rotation={rotation} castShadow receiveShadow dispose={null} />
}

function Wall({ mobile, ...props }: SceneProps) {
  const { onReady, onFailure } = props
  const frame = useRef<THREE.Group>(null)
  const timber = useRef<THREE.Group>(null)
  const wrap = useRef<THREE.Group>(null)
  const battens = useRef<THREE.Group>(null)
  const cladding = useRef<THREE.Group>(null)
  const trim = useRef<THREE.Group>(null)
  const model = useRef<THREE.Group>(null)
  const { camera, invalidate, gl, size } = useThree()
  const dragging = useRef<{ x: number; rotation: number } | null>(null)
  const manualRotation = useRef(0)
  const materials = useMemo(() => ({
    steel: new THREE.MeshStandardMaterial({ color: '#919b9b', metalness: 0.75, roughness: 0.36 }),
    steelDark: new THREE.MeshStandardMaterial({ color: '#546362', metalness: 0.65, roughness: 0.4 }),
    timber: new THREE.MeshStandardMaterial({ color: '#b88b5a', roughness: 0.88 }),
    timberEnd: new THREE.MeshStandardMaterial({ color: '#cea771', roughness: 0.86 }),
    foil: new THREE.MeshStandardMaterial({ color: '#c6ccc6', metalness: 0.5, roughness: 0.48 }),
    board: new THREE.MeshStandardMaterial({ color: '#e4e1d8', roughness: 0.9 }),
    boardEdge: new THREE.MeshStandardMaterial({ color: '#c9c8bc', roughness: 0.85 }),
    red: new THREE.MeshStandardMaterial({ color: '#c82420', roughness: 0.48, metalness: 0.25 }),
    dark: new THREE.MeshStandardMaterial({ color: '#263735', roughness: 0.35, metalness: 0.45 }),
    glass: new THREE.MeshStandardMaterial({ color: '#76938b', roughness: 0.18, metalness: 0.65 }),
    slab: new THREE.MeshStandardMaterial({ color: '#b7b6ae', roughness: 0.95 }),
  }), [])
  const ghostEdges = useMemo(() => {
    const shape = new THREE.BoxGeometry(6.4, 3.4, 2.5)
    const edges = new THREE.EdgesGeometry(shape)
    shape.dispose()
    return edges
  }, [])
  useEffect(() => () => ghostEdges.dispose(), [ghostEdges])
  useEffect(() => () => Object.values(materials).forEach(m => m.dispose()), [materials])
  useEffect(() => {
    onReady()
    const lost = (event: Event) => { event.preventDefault(); onFailure() }
    gl.domElement.addEventListener('webglcontextlost', lost)
    return () => gl.domElement.removeEventListener('webglcontextlost', lost)
  }, [gl, onReady, onFailure])
  useEffect(() => { invalidate() }, [props.progress, props.angle, mobile, invalidate, size])

  useEffect(() => {
    const canvas = gl.domElement
    const down = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      dragging.current = { x: e.clientX, rotation: manualRotation.current }
      canvas.setPointerCapture(e.pointerId)
      canvas.style.cursor = 'grabbing'
    }
    const move = (e: PointerEvent) => {
      if (!dragging.current) return
      manualRotation.current = dragging.current.rotation + (e.clientX - dragging.current.x) * 0.005
      invalidate()
    }
    const up = () => { dragging.current = null; canvas.style.cursor = 'grab' }
    canvas.addEventListener('pointerdown', down); canvas.addEventListener('pointermove', move); canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up)
    return () => { canvas.removeEventListener('pointerdown', down); canvas.removeEventListener('pointermove', move); canvas.removeEventListener('pointerup', up); canvas.removeEventListener('pointercancel', up) }
  }, [gl, invalidate])

  useFrame(() => {
    const p = props.progress
    const frameP = phase(p, ...assembly.frame)
    if (frame.current) { frame.current.scale.y = 0.06 + frameP * 0.94; frame.current.position.y = (1 - frameP) * 0.05 }
    if (timber.current) { const t = phase(p, ...assembly.timber); timber.current.position.y = (1 - t) * 2.8; timber.current.scale.setScalar(Math.max(0.001, t)); timber.current.visible = t > 0.001 }
    if (wrap.current) { const t = phase(p, ...assembly.wrap); wrap.current.scale.x = Math.max(0.001, t); wrap.current.position.z = (1 - t) * -1.6; wrap.current.visible = t > 0.001 }
    if (battens.current) { const t = phase(p, ...assembly.battens); battens.current.position.z = (1 - t) * 2; battens.current.scale.y = Math.max(0.001, t); battens.current.visible = t > 0.001 }
    if (cladding.current) { const t = phase(p, ...assembly.cladding); cladding.current.position.x = (1 - t) * 6; cladding.current.scale.y = Math.max(0.001, t); cladding.current.visible = t > 0.001 }
    if (trim.current) { const t = phase(p, ...assembly.trim); trim.current.position.z = (1 - t) * 2; trim.current.scale.setScalar(Math.max(0.001, t)); trim.current.visible = t > 0.001 }
    if (model.current) { model.current.rotation.y = -0.28 + p * 0.42 + props.angle * 0.65 + manualRotation.current }
    const cameraP = phase(p, 0.05, 0.96)
    camera.position.set(mobile ? 9.8 : 10.5 - cameraP * 0.9, mobile ? 7.4 : 6.8 - cameraP * 1.1, mobile ? 12.8 : 12.2)
    camera.lookAt(0, 1.25, 0)
    camera.updateProjectionMatrix()
  })

  const studs = mobile ? [-3.2, -2.5, -1.8, 1.8, 2.5, 3.2] : [-3.2, -2.73, -2.26, -1.8, 1.8, 2.26, 2.73, 3.2]
  const openingStuds = [-1.2, -0.6, 0, 0.6, 1.2]
  const boards = Array.from({ length: 14 }, (_, i) => 0.14 + i * 0.24)
  const beam = (position: BeamProps['position'], s: BeamProps['size'], material: THREE.Material, key: string | number) => <Beam key={key} position={position} size={s} material={material} />
  const frontStrips = (y: number, height: number, depth: number, z: number, material: THREE.Material, key: string) => y > 1.04 && y < 2.86
    ? <group key={key}>{beam([-2.53, y, z], [1.34, height, depth], material, 'l')}{beam([2.53, y, z], [1.34, height, depth], material, 'r')}</group>
    : beam([0, y, z], [6.4, height, depth], material, key)

  return <group position={[0, -0.5, 0]}>
    <group ref={model}>
      <Beam position={[0, -0.13, -0.12]} size={[7.1, 0.24, 3.25]} material={materials.slab} />
      <Beam position={[0, 0.025, 1.15]} size={[6.5, 0.055, 0.15]} material={materials.steelDark} />
      <Beam position={[-3.2, 0.025, -0.1]} size={[0.15, 0.055, 2.5]} material={materials.steelDark} />
      <Beam position={[3.2, 0.025, -0.1]} size={[0.15, 0.055, 2.5]} material={materials.steelDark} />
      <group ref={frame}>
        {studs.map((x, i) => <group key={x}>
          <Beam position={[x, 1.7, 1.14]} size={[0.075, 3.4, 0.025]} material={materials.steel} />
          {!mobile && <Beam position={[x - 0.035, 1.7, 1.2]} size={[0.018, 3.4, 0.13]} material={materials.steel} />}
          <Beam position={[x + 0.035, 1.7, 1.2]} size={[0.018, 3.4, 0.13]} material={i % 2 === 0 ? materials.steelDark : materials.steel} />
        </group>)}
        {openingStuds.map((x) => <group key={x}><Beam position={[x, 0.52, 1.18]} size={[0.07, 1.04, 0.12]} material={materials.steel} /><Beam position={[x, 3.13, 1.18]} size={[0.07, 0.54, 0.12]} material={materials.steel} /></group>)}
        {[1.06, 2.86, 3.4].map((y) => <Beam key={y} position={[0, y, 1.18]} size={[y === 3.4 ? 6.48 : 3.7, 0.09, 0.15]} material={materials.steelDark} />)}
        {[-3.2, 3.2].map((x) => <group key={x}>
          {[-1.35, -0.75, -0.15, 0.45].map((z) => <Beam key={z} position={[x, 1.7, z]} size={[0.12, 3.4, 0.065]} material={materials.steel} />)}
          <Beam position={[x, 3.4, -0.1]} size={[0.15, 0.09, 2.6]} material={materials.steelDark} />
        </group>)}
      </group>
      <group ref={timber}>
        {studs.slice(0, -1).map((x, i) => { const next = studs[i + 1]; return next - x < 1 ? <Beam key={x} position={[(x + next) / 2, 1.65 + i % 2 * 0.12, 1.18]} size={[next - x - 0.07, 0.14, 0.1]} material={materials.timber} /> : null })}
        {openingStuds.slice(0, -1).map((x, i) => <Beam key={x} position={[x + 0.3, 0.55 + i % 2 * 0.13, 1.18]} size={[0.53, 0.14, 0.1]} material={materials.timberEnd} />)}
        {[-3.2, 3.2].map((x) => [-1.05, -0.45, 0.15, 0.75].map((z, i) => <Beam key={`${x}-${z}`} position={[x, 1.7 + i % 2 * 0.13, z]} size={[0.1, 0.14, 0.53]} material={materials.timber} />))}
      </group>
      <group ref={wrap}>
        {frontStrips(0.5, 1, 0.018, 1.28, materials.foil, 'bottom')}
        {frontStrips(1.95, 1.9, 0.018, 1.28, materials.foil, 'sides')}
        {frontStrips(3.15, 0.5, 0.018, 1.28, materials.foil, 'top')}
        <Beam position={[-3.27, 1.7, -0.1]} size={[0.02, 3.4, 2.6]} material={materials.foil} />
        {[-2.5, -1.8, 1.8, 2.5].map(x => <Beam key={x} position={[x, 1.7, 1.296]} size={[0.015, 3.4, 0.008]} material={materials.steelDark} />)}
      </group>
      <group ref={battens}>
        {studs.map(x => <group key={x}><Beam position={[x, 1.7, 1.34]} size={[0.045, 3.4, 0.06]} material={materials.timber} />{!mobile && [0.5, 1.65, 2.8].map(y => <Beam key={y} position={[x, y, 1.36]} size={[0.10, 0.055, 0.035]} material={materials.steelDark} />)}</group>)}
        {openingStuds.map(x => <Beam key={x} position={[x, 0.5, 1.34]} size={[0.045, 1, 0.06]} material={materials.timber} />)}
      </group>
      <group ref={cladding}>
        {boards.map((y, i) => frontStrips(y, 0.226, 0.055, 1.405, i % 3 === 0 ? materials.boardEdge : materials.board, `front-${i}`))}
        {boards.map((y, i) => <Beam key={`side-${i}`} position={[-3.3, y, -0.09]} size={[0.055, 0.226, 2.65]} material={i % 3 === 0 ? materials.boardEdge : materials.board} />)}
      </group>
      <group ref={trim}>
        <Beam position={[0, 1.96, 1.24]} size={[3.5, 1.71, 0.08]} material={materials.glass} />
        {[-1.82, 1.82].map(x => <Beam key={x} position={[x, 1.96, 1.48]} size={[0.14, 1.96, 0.16]} material={materials.red} />)}
        {[1.01, 2.91].map(y => <Beam key={y} position={[0, y, 1.48]} size={[3.77, 0.14, 0.16]} material={materials.red} />)}
        <Beam position={[0, 1.96, 1.40]} size={[0.055, 1.76, 0.07]} material={materials.dark} />
        <Beam position={[0, 3.43, 1.42]} size={[6.65, 0.10, 0.13]} material={materials.dark} />
        <Beam position={[-3.32, 3.43, -0.1]} size={[0.13, 0.10, 2.8]} material={materials.dark} />
        <Beam position={[-3.34, 1.7, 1.43]} size={[0.1, 3.4, 0.1]} material={materials.red} />
      </group>
      <lineSegments position={[0, 1.72, -0.1]} geometry={ghostEdges}>
        <lineBasicMaterial color="#838b83" transparent opacity={0.12} />
      </lineSegments>
      <gridHelper args={[14, 28, '#bdbfb5', '#dcdcd4']} position={[0, -0.265, 0]} />
      <Beam position={[-3.8, -0.25, 1.8]} size={[0.6, 0.015, 0.025]} material={materials.red} />
      <Beam position={[-3.8, -0.25, 1.8]} size={[0.025, 0.015, 0.6]} material={materials.red} />
    </group>
    {!mobile && <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.78, 0]}><planeGeometry args={[200, 200]} /><shadowMaterial opacity={0.13} transparent /></mesh>}
  </group>
}

export default function ConstructionScene(props: SceneProps) {
  return <Canvas className="construction-canvas" frameloop="demand" dpr={props.mobile ? [1, 1.25] : [1, 1.6]} shadows={props.mobile ? false : { type: THREE.PCFShadowMap }} camera={{ position: [10.5, 6.8, 12.2], fov: props.mobile ? 34 : 32, near: 0.1, far: 100 }} gl={{ antialias: !props.mobile, alpha: true, powerPreference: props.mobile ? 'low-power' : 'high-performance' }} aria-label="3D cutaway wall: steel studs, timber noggins, wrap, battens, cladding and window trim">
    <ambientLight intensity={1.55} />
    <hemisphereLight args={['#ffffff', '#8b8c7b', 1.2]} />
    <directionalLight position={[3, 10, 5]} intensity={3} castShadow={!props.mobile} shadow-mapSize={[1024, 1024]} shadow-camera-left={-8} shadow-camera-right={8} shadow-camera-top={8} shadow-camera-bottom={-8} shadow-bias={-0.001} />
    <directionalLight position={[-6, 3, -5]} intensity={1.5} color="#e7edee" />
    <Wall {...props} />
  </Canvas>
}
