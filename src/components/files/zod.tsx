import { z } from 'zod';

export const schema = z.array(
	z.object({
		topic: z.string(),
		events: z.array(z.object({ what: z.string(), when: z.string() }))
	})
);
