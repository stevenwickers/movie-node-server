import fs from 'node:fs/promises'

export const ReadInFile = async (path: string): Promise<any> => {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' })
    return JSON.parse(data)
  } catch (e: any) {
    throw new Error(e.toString())
  }

}