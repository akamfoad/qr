import { describe, expect, it } from 'vitest';

import { qrcode } from '../index';
import QRCode from '../lib/QRCode';
import { ErrorCorrectLevel } from '../lib/ErrorCorrectLevel';

describe('package exports', () => {
  it('qrcode function', () => {
    const input = 'akamfoad.dev';
    const manualQRCode = new QRCode(-1, ErrorCorrectLevel.H);

    manualQRCode.addData(input);
    manualQRCode.make();

    const builderQRCode = qrcode(input);

    expect(manualQRCode).toStrictEqual(builderQRCode);
    expect(manualQRCode.modules).toStrictEqual(builderQRCode.modules);
    expect(manualQRCode.getModuleCount()).toBe(builderQRCode.getModuleCount());
  });
});
