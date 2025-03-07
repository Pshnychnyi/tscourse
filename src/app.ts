import { PromptService } from './core/prompt/prompt.service'

export class App {
  async run() {
    const result = await (new PromptService()).input<number>('number', 'number')
    console.log(result)
  }
}

const { run } = new App()
run()
