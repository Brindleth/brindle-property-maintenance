import { test } from 'node:test'
import assert from 'node:assert/strict'
import { assembly, phase, scrollProgress, stageAt, stageProgress } from '../src/lib/construction.ts'

test('scroll maps to the same construction state in both directions, including bounds', () => {
  assert.equal(scrollProgress(-500, 0, 5800, 1000), 0)
  assert.equal(scrollProgress(9000, 0, 5800, 1000), 1)
  const positions = [0, 650, 1200, 2400, 3600, 4800]
  const forward = positions.map(y => scrollProgress(y, 0, 5800, 1000))
  const backward = [...positions].reverse().map(y => scrollProgress(y, 0, 5800, 1000)).reverse()
  assert.deepEqual(forward, backward)
  assert.equal(forward[3], 0.5)
  assert.equal(scrollProgress(0, 0, 100, 1000), 0)
})

test('each keyboard-accessible stage shortcut lands in its own stage', () => {
  for (let i = 0; i < 6; i++) assert.equal(stageAt(stageProgress(i)), i)
  assert.equal(stageAt(1), 5)
  assert.equal(stageAt(-1), 0)
  assert.equal(phase(stageProgress(5), ...assembly.trim), 1, 'Final shortcut must fully assemble the trim')
})

test('assembly begins with ground layout and ends with every layer complete', () => {
  for (const timing of Object.values(assembly)) {
    assert.equal(phase(0, ...timing), 0)
    assert.equal(phase(1, ...timing), 1)
    let previous = 0
    for (let i = 0; i <= 100; i++) {
      const current = phase(i / 100, ...timing)
      assert.ok(current >= previous && current <= 1)
      previous = current
    }
  }
})
