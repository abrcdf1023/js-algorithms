const fs = require('fs')
const path = require('path')
const prompts = require('prompts');
const { exec } = require("child_process");

function readFiles(rootDir) {
  const result = []

  function readFilesRecursivly(dir) {
    const files = fs.readdirSync(dir)
    files?.forEach((file) => {
      if (fs.lstatSync(`${dir}/${file}`).isDirectory()) {
        readFilesRecursivly(`${dir}/${file}`)
      } else {
        result.push(`${dir}/${file}`)
      }
    })
  }
  readFilesRecursivly(rootDir)

  return result
}

function excutetFunc(jsFile) {
  exec(`ts-node ${jsFile}`, (error, stdout, stderr) => {
    if (error) {
        console.log(error.message);
        return;
    }
    if (stderr) {
        console.log(stderr);
        return;
    }
    console.log(stdout);
  })
}

function watch(jsFile, cb) {
  cb()
  fs.watch(path.dirname(jsFile), cb);
}

async function run() {
  const files = readFiles(path.join(__dirname, '../src'))
  
  if (files.length > 1) {
    const response = await prompts({
      type: 'select',
      name: 'value',
      message: 'Select file to execute',
      choices: files.map(el => ({
        title: path.basename(el),
        value: el
      })),
      initial: 1
    });
    watch(response.value, () => excutetFunc(response.value))
  } else {
    watch(files[0], () => excutetFunc(files[0]))
  }
}

run()