import QRCode from './lib/QRCode';
import { ErrorCorrectLevel } from './lib/ErrorCorrectLevel';

export const qrcode = function(
  data: string,
  opt?: { typeNumber?: number; errorCorrectLevel?: number }
) {
  opt = opt || {};
  var qr = new QRCode(
    opt.typeNumber || -1,
    opt.errorCorrectLevel || ErrorCorrectLevel.H
  );
  qr.addData(data);
  qr.make();

  return qr;
};

export { ErrorCorrectLevel } from './lib/ErrorCorrectLevel';
