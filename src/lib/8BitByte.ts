import mode from './mode';
import type QRBitBuffer from './BitBuffer';

export default class QR8bitByte {
  mode: number;
  data: string;
  constructor(data: string) {
    this.mode = mode.MODE_8BIT_BYTE;
    this.data = data;
  }
  getLength() {
    return this.data.length;
  }

  //   FIXME?
  write(buffer: QRBitBuffer) {
    for (var i = 0; i < this.data.length; i++) {
      // not JIS ...
      buffer.put(this.data.charCodeAt(i), 8);
    }
  }
}
