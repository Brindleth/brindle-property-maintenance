import { useId, useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import { asset } from '../data/portfolio'
import { comparisonAt, comparisonClip } from '../lib/patioComparison'
import type { Transformation } from '../data/transformations'

export default function ImageComparison({ comparison }: { comparison: Transformation }) {
  const [split, setSplit] = useState(50)
  const pointer = useRef<number | null>(null)
  const uniqueId = useId()
  const id = comparison.id + '-comparison'
  function update(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    setSplit(comparisonAt(event.clientX, rect.left, rect.width))
  }
  const image = (side: 'before' | 'after') => {
    const photo = comparison[side]
    return <img className={side === 'after' ? 'comparison-after' : undefined} src={asset(photo.src)} srcSet={photo.sources.map(source => asset(source.src)+' '+source.width+'w').join(', ')} sizes={comparison.layout === 'portrait' ? '(max-width: 760px) 90vw, 49vw' : '(max-width: 760px) 90vw, 80vw'} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" draggable="false" style={side === 'after' ? {clipPath:comparisonClip(split)} : undefined} />
  }
  return <figure className={'image-comparison comparison-'+comparison.layout} aria-label={comparison.label}>
    <div className="comparison-stage" onPointerDown={event => { if (!event.isPrimary || event.button !== 0) return; pointer.current=event.pointerId; event.currentTarget.setPointerCapture(event.pointerId); update(event) }} onPointerMove={event => { if(pointer.current===event.pointerId)update(event) }} onPointerUp={() => {pointer.current=null}} onPointerCancel={() => {pointer.current=null}} onLostPointerCapture={() => {pointer.current=null}}>
      {image('before')}{image('after')}
      <span className="comparison-photo-label comparison-before-label" style={{opacity:split<12?0:1}}>{comparison.beforeLabel}</span>
      <span className="comparison-photo-label comparison-after-label" style={{opacity:split>88?0:1}}>{comparison.afterLabel}</span>
      <span className="comparison-divider" style={{left:split+'%'}} aria-hidden="true"><span>↔</span></span>
    </div>
    <div className="comparison-range"><label className="sr-only" htmlFor={id}>{comparison.controlLabel}</label><input id={id} type="range" min="0" max="100" step="1" value={split} aria-describedby={uniqueId} aria-valuetext={`${split}% ${comparison.beforeLabel.toLowerCase()}, ${100-split}% ${comparison.afterLabel.toLowerCase()}`} onChange={event=>setSplit(Number(event.target.value))}/><div aria-hidden="true"><span>Show after</span><span>Drag to compare</span><span>Show before</span></div></div>
    <figcaption id={uniqueId}>{comparison.disclosure}</figcaption>
  </figure>
}
