import { Rule, chain, apply, url, move, applyTemplates, filter, noop } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

export default function handler(options: any): Rule {
  const templateSource = apply(url('./files/slider'), [
    options.skipTests ? filter((path) => !path.endsWith('.spec.ts.template')) : noop(),
    applyTemplates({
      ...strings,
      ...options
    }),
    move(options.path)
  ]);
  console.log(11111111);
  return chain([]);
}
