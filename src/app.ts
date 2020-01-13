import { run } from '@cycle/rxjs-run'
import { makeDOMDriver, h1 } from '@cycle/dom'
import { interval } from 'rxjs'
import { map } from 'rxjs/operators'

function main() {
  const sinks = {
    DOM: interval(1000).pipe(
      map(i => h1('' + i + ' seconds elapsed'))
    )
  }

  return sinks
}

const drivers = {
  DOM: makeDOMDriver('#app')
}

run(main, drivers)
