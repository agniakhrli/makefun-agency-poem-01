import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = `I release the pen,
and the cursor blinks—
a glass pupil waiting
for what the dark thinks.

It moves without breath,
weaving the grid,
while I weigh the choice
that the syntax forbids.

When the prompt goes cold,
I reclaim the frame:
the machine drives the process,
while I hold the aim.`;

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
