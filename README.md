# @akamfoad/qr

Fully typed **QRCode encoding** implementation in JavaScript with no dependencies!

```js
import { qrcode as qr } from '@akamfoad/qr';

const qrcode = qr('foo bar baz');

const cells = qrcode.modules;

// cell[R] -> row
// if cell[R][C] is true, that cell is "on"
```

[interactive example](https://js-2xc6qu.stackblitz.io/)

## type docs

<https://akamfoad.github.io/qr/>

## credit

This library is repackaged work from the qrcode library here <http://www.d-project.com/> which is also licensed under the MIT license.
