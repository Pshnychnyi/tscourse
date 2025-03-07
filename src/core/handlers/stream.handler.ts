import { IStreamLogger } from './stream-logger.interface'
import { ChildProcess, ChildProcessWithoutNullStreams } from 'node:child_process'

export class StreamHandler {
  constructor(private outHandler: IStreamLogger) {}

  processOutput(stream: ChildProcessWithoutNullStreams) {
    stream.stdout.on('data', (data: any) => {
      this.logger.log(data)
    })

    stream.stderr.on('data', (data: any) => {
      this.logger.error(data)
    })

    stream.stderr.on('close', (data: any) => {
      this.logger.end(data)
    })
  }
}
