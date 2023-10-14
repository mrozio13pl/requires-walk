/* eslint-disable @typescript-eslint/no-explicit-any */
import { parse, type ParserOptions } from '@babel/parser';
import type { Node } from '@babel/types';

function isNode(obj: any): obj is Node {
    return obj && typeof obj === 'object';
}

function findRequires(node: Node, requires: string[] = []) {
    if (node.type === 'CallExpression') {
        if (
            node.callee.type === 'Identifier' &&
            node.callee.name === 'require' &&
            node.arguments.length === 1 &&
            node.arguments[0].type === 'StringLiteral'
        ) {
            requires.push(node.arguments[0].value);
        }
    }

    for (const key in node) {
        if (isNode((<any>node)[key])) {
            findRequires((<any>node)[key], requires);
        }
    }

    return requires;
}

/**
 * Find `require()` calls.
 * @param {string} src Source, where `require()` calls will be looked for.
 * @param {ParserOptions} options Options are the same as babel parser options.
 * @see https://babeljs.io/docs/babel-parser#options
 * @returns {string[]} Array of required modules.
 *
 * @example
 *
 * `source.js`:
 * ```js
 * const moduleA = require('./module-a.js');
 * const moduleA = require('./module-b.js');
 * const moduleA = require('./module-c.js');
 * ```
 *
 * `program.js`
 * ```js
 * const requiresWalk = require('requires-walk');
 * const fs = require('fs');
 * const source = fs.readFileSync('source.js', 'utf8');
 *
 * requiresWalk(source); // <= ['./module-a.js', './module-b.js', './module-c.js']
 * ```
 */
export = function (src: string, options: ParserOptions = {}): string[] {
    const ast = parse(src, {
        sourceType: 'module',
        ...options
    });

    return findRequires(ast);
}