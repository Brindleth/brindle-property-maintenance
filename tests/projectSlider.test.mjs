import { test } from 'node:test'
import assert from 'node:assert/strict'
import { projectStages, framingDetail } from '../src/data/projectStages.ts'
import { nextProjectStage, swipeDirection } from '../src/lib/projectSlider.ts'

test('four real-photo stages preserve verified details and keep framing optional', () => {
  assert.deepEqual(projectStages.map(stage => stage.id), ['1000020847', '1000020945', '1000020946', '1000020958'])
  assert.ok(projectStages[0].description.includes('fixings already in place'))
  assert.ok(projectStages[2].description.includes('before cladding'))
  assert.ok(projectStages[3].description.includes('upper wall is still exposed'))
  assert.equal(framingDetail.id, '1000020943')
})
test('previous and next wrap reversibly at the four-stage boundaries', () => {
  assert.equal(nextProjectStage(0, -1), 3)
  assert.equal(nextProjectStage(3, 1), 0)
  for (let i = 0; i < 4; i++) assert.equal(nextProjectStage(nextProjectStage(i, 1), -1), i)
})
test('deliberate horizontal swipes change stage while vertical scrolling and taps do not', () => {
  assert.equal(swipeDirection(-120, 15), 1)
  assert.equal(swipeDirection(120, 15), -1)
  assert.equal(swipeDirection(20, 5), 0)
  assert.equal(swipeDirection(80, 120), 0)
  assert.equal(swipeDirection(0, 0), 0)
})
