import QRCode from './lib/QRCode';
import { ErrorCorrectLevel } from './lib/ErrorCorrectLevel';

export const qrcode = (
  data: string,
  opt?: { typeNumber?: number; errorCorrectLevel?: number },
) => {
  opt = opt || {};
  const qr = new QRCode(
    opt.typeNumber || -1,
    opt.errorCorrectLevel || ErrorCorrectLevel.H,
  );
  qr.addData(data);
  qr.make();

  return qr;
};

export { default as QRCode } from './lib/QRCode';
export { ErrorCorrectLevel } from './lib/ErrorCorrectLevel';
