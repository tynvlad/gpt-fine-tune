import { Configuration, OpenAIApi } from "openai";

const key = process.env.OPENAI_KEY;

const config = new Configuration({ apiKey: key });

export const openai = new OpenAIApi(config);
