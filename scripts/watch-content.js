const chokidar = require("chokidar")
const path = require("path")
const { exec } = require("child_process")

const contentDir = path.join(process.cwd(), "content")

// Initialize watcher
const watcher = chokidar.watch(`${contentDir}/**/*.json`, {
  persistent: true,
  ignoreInitial: true,
})

console.log(`Watching for changes in ${contentDir}`)

// Add event listeners
watcher.on("change", (path) => {
  console.log(`File ${path} has been changed`)
  // Touch the page files to trigger a reload
  exec('find ./app -name "*.tsx" -exec touch {} \\;', (error) => {
    if (error) {
      console.error(`Error touching files: ${error}`)
    } else {
      console.log("Triggered reload of page components")
    }
  })
})
