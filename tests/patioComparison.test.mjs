import { test } from 'node:test'
import assert from 'node:assert/strict'
import { comparisonAt, comparisonClip } from '../src/lib/patioComparison.ts'

test('patio pointer position maps to a bounded divider percentage', () => {
  assert.equal(comparisonAt(300, 100, 400), 50)
  assert.equal(comparisonAt(50, 100, 400), 0)
  assert.equal(comparisonAt(600, 100, 400), 100)
  assert.equal(comparisonAt(100, 100, 0), 50)
})
test('patio comparison fully reveals either image at its range endpoints', () => {
  assert.equal(comparisonClip(0), 'inset(0 0 0 0%)')
  assert.equal(comparisonClip(100), 'inset(0 0 0 100%)')
  assert.equal(comparisonClip(50), 'inset(0 0 0 50%)')
  assert.equal(comparisonClip(-10), comparisonClip(0))
  assert.equal(comparisonClip(110), comparisonClip(100))
})
