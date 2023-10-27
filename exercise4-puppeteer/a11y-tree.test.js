/**
/* @jest-environment puppeteer
**/

import 'expect-puppeteer'
import path from 'path'
import fs from 'fs'

describe('Accessibility Tree', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:1234/passes')
    })

    it('should display heading text on page', async () => {
        await expect(page).toMatch('Pick a Plan and Start Your Adventure Today!')
    })

    it('creates accessibility tree json file', async () => {
        const snapshot = page.accessibility.snapshot()
        const assetFilePath = path.join(process.cwd(), 'exercise4-puppeteer', 'a11y-tree.json')

        fs.writeFile(
            assetFilePath,
            JSON.stringify(snapshot, null, 5),
            () => {}
        )

        fs.stat(assetFilePath, (err, stat) => {
          expect(stat.isFile()).toBe(true)
        })
    })

    it('has the correct axTree', async () => {
      const axTree = await page.accessibility.snapshot()
      expect(axTree).toMatchSnapshot()
    })
})
