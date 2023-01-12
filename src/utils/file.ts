import fs from 'fs';

export const deleteFile = async (filename: string) => {
  try {
    // stat verifica se o arquivo existe no caminha informado
    await fs.promises.stat(filename);
  } catch {
    return;
  }
  // unlink remove o arquivo se o mesmo já existir no caminho informado - stat = true
  await fs.promises.unlink(filename);
};
