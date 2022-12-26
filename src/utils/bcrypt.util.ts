import bcrypt from "bcrypt"

export const generateHash = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}

export const compareHash = async (password: string, hash: string): Promise<boolean> => bcrypt.compare(password, hash)