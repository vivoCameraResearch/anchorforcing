// List all interactive video files (order defines grid filling, max 24 shown)
window.INTERACTIVE_FILES = [
    "baker.mp4",
    "bear.mp4",
    "casino.mp4",
    "chess.mp4",
    "dog.mp4",
    "party.mp4",
    "season.mp4",
    "woman.mp4",
    "woman2.mp4",
    "chess2.mp4",
    "scientist.mp4",
    "wizard.mp4",
    "pilot.mp4",
    "photographer.mp4",
    "painter.mp4",
];

// window.INTERACTIVE_PROMPTS = {
//     "baker.mp4": `0s-10s: A baker with a flour-dusted apron is kneading dough on a large wooden table in a warm, cozy bakery. The smell of fresh bread is in the air. Racks of cooling loaves are in the background.
// 10s-20s: The baker kneading dough in the cozy bakery is interrupted by the ringing of a small bell. A little girl has entered the shop and is peering over the counter with wide eyes, looking at the pastries.
// 20s-30s: The baker and the little girl are in the cozy bakery. The baker smiles, wipes his hands, and comes over to the counter. He asks the little girl what she would like. The racks of bread are behind him.
// 30s-40s: The baker in the cozy bakery gives the little girl the croissant she pointed to. As a treat, he also gives her a small, unbaked piece of dough to play with. The girl is delighted.
// 40s-50s: The baker and the little girl are in the cozy bakery. She sits at a small table, happily eating her croissant and squishing the piece of dough in her hands, while the baker returns to kneading his bread.
// 50s-60s: The baker works at his wooden table, occasionally glancing over and smiling at the little girl, his happy customer, in the warm and friendly atmosphere of the cozy bakery.`,
//     "bear.mp4": `0s-10s: In a dense spring forest, soft morning light filters through the canopy and mist curls around mossy trunks. A wooden footbridge spans a lively stream. At center frame a black bear strides forward, powerful shoulders rolling as it brushes dew-wet ferns.
// 10s-20s: The bear’s fur brightens and patches of white appear, ears rounding as it becomes a calm giant panda, lumbering ahead beneath the same glowing canopy and over the same footbridge.
// 20s-30s: The panda straightens, eyes sparking with playful focus, then flips and rolls into Kung Fu Panda Po, showing nimble kung-fu moves while staying on the same path.
// 30s-40s: Po’s form softens to velvety pink, smoothly morphing into Lotso the strawberry bear, waddling cheerfully with arms wide and a faint sweet aura implied.
// 40s-50s: Lotso’s pink fades to honey-gold as he transforms into Winnie the Pooh, ambling happily and brushing spring blossoms along the unchanged trail.
// 50s-60s: Winnie the Pooh’s fur shimmers with pastel hues and a glowing heart emblem, bounding forward with a friendly wave to complete the seamless bear-to-bear journey.`,
//     "casino.mp4": `0s-10s: Casino Texas Hold'em: late-30s man with short dark hair and light stubble in a navy blazer/charcoal tee grips his hole cards, jaw tight. Chips crowd the felt, dealer deals, slot machines glow. Wide → medium close-up on his strained focus.
// 10s-20s: Same setup: he flicks his cards to the felt and leans back, arms spread in triumph. Camera locks on the celebration.
// 20s-30s: He flips the winning hand; a nearby patron claps as applause rises. Camera centers on his reaction.
// 30s-40s: "He sits upright and methodically stacks his chips, neat, deliberate movements.
// 40s-50s: He surveys the chips and breaks into a proud, self-assured smile.
// 50s-60s: He high-fives a patron; laughter and cheers ripple around the table. Same framing.`,
//     "chess.mp4": `0s-10s: A chess grandmaster, an older gentleman with sharp eyes, is contemplating a move in a silent, wood-paneled championship hall. He is playing against an unseen opponent. The chessboard is classic Staunton design.
// 10s-20s: The chess grandmaster in the silent championship hall is playing against a sophisticated chess-playing AI, represented by a sleek, modern robotic arm that hovers over the other side of the board.
// 20s-30s: The chess grandmaster and the robotic chess AI are in the silent championship hall. The grandmaster makes a decisive move, sliding his queen across the board. The robotic arm whirs softly as it analyzes the new position.
// 30s-40s: The chess grandmaster and the robotic chess AI in the silent championship hall. After a moment of calculation, the robotic arm extends, its pincers delicately picking up a knight and placing it in a new position with unnerving precision.
// 40s-50s: The chess grandmaster in the silent championship hall studies the board, a bead of sweat on his brow. The robotic chess AI's move was brilliant and unexpected. The only sound is the soft ticking of the chess clock.
// 50s-60s: The chess grandmaster and the robotic chess AI are in the silent championship hall. After long consideration, the grandmaster looks up from the board, smiles faintly, and extends his hand, conceding the game. The robotic arm does not move.`,
//     "dog.mp4": `0s-10s: A glass of red wine sits on a small table next to a crackling fireplace in a cozy, wood-paneled study. The room is dark except for the warm glow of the fire.
// 10s-20s: A glass of red wine sits next to the crackling fireplace in the cozy study. A large, fluffy golden retriever dog pads silently into the room and lies down on the rug in front of the fire.
// 20s-30s: The glass of red wine and the golden retriever are in the cozy study. The dog rests its head on its paws, its eyes closing as it enjoys the warmth of the crackling fireplace.
// 30s-40s: The glass of red wine and the golden retriever are in the cozy study. A person's hand enters the frame and gently strokes the dog's soft fur. The dog's tail gives a lazy thump-thump on the rug.
// 40s-50s: The glass of red wine and the golden retriever are in the cozy study. The hand picks up the glass of wine from the table. The dog remains sleeping peacefully by the crackling fireplace.
// 50s-60s: The person sips the red wine while continuing to pet the sleeping golden retriever, a perfect picture of quiet contentment in the cozy, fire-lit study.`,
//     "party.mp4":  `0s-10s: Neon-lit nighttime political mixer, TV-promo style: formal attire, handshakes and smiles amid a bustling crowd with wine glasses. Modern urban venue, soft ambient  +  bright neon. Coverage mixes close-ups and wides with fast cuts and subtle zooms.
// 10s-20s: Same setup: they raise glasses for a toast—unified, celebratory expressions. Same coverage.
// 20s-30s: Same setup: glasses lower after the toast; relieved, satisfied smiles. Same coverage.
// 30s-40s: Same setup: firmer handshakes and agreeable nods as they reconnect. Same coverage.
// 40s-50s: Same setup: they split into small groups, animated, persuasive conversations. Same coverage.
// 50s-60s: Same setup: reporters push in; flashes pop as the group greets them, pleasantly surprised. Same coverage.`,
//     "season.mp4": `0s-10s: The camera glides through a tranquil bamboo forest in early spring. Fresh shoots glow emerald and teal, mist threads between stalks, dew sparks on young leaves, and warm light filters down—layer after layer of new growth.
// 10s-20s: Same forward glide into summer: canopy deepens to jade as heavy rain sheets down, bouncing off broad leaves, puddles rippling to distant thunder.
// 20s-30s: Without a cut into autumn: leaves turn gold and rust; a cool gust sends them skittering across an amber-lit floor as rows of bamboo bend and rustle.
// 30s-40s: Seamlessly to winter: silver snow dusts the canopy, frost rims each leaf, flakes drift, and dark trunks glaze to a quiet, crystalline sheen.
// 40s-50s: Back to spring: snowmelt beads into sparkle, bamboo brightens to soft emerald, and tiny buds unfurl in misty dawn light.
// 50s-60s: Loop to summer: lush green returns; a gentle rain begins, drops pattering into mirrored pools as the steady glide completes the cycle.`,
//     "woman.mp4": `0s-10s: Medium close-up, static: A young white woman in a blue work coat and white apron, curly brown ponytail, lifts a tool from a tidy, well-lit workbench and smiles to camera in greeting.
// 10s-20s: She tightens a screw with it, then shows the result with a satisfied nod.
// 20s-30s: She wipes her hands on a rag and gestures proudly to the finished piece.
// 30s-40s: Still smiling, she picks up a small hammer to demonstrate the next step.
// 40s-50s: She gently taps a nail into wood with steady, careful strikes; ponytail sways.
// 50s-60s: Leaning closer, eyes bright, she offers a proud, friendly smile with the hammer resting in hand.`,
//     "woman2.mp4": `0s-10s: Medium close-up: a serene model with long pink hair in a simple white gown, partly veiled by swirling pink smoke, amid gently falling sakura petals—dreamy, ethereal.
// 10s-20s: Same setup: she lifts her hand as if to caress a petal, fingertips grazing the smoke.
// 20s-30s: A soft breeze stirs; more petals flutter around her hand.
// 30s-40s: She gently closes her eyes, lashes resting; the calm holds.
// 40s-50s: She steps forward lightly; a small bird flits to a nearby branch.
// 50s-60s: The bird perches on her outstretched finger as pink—and faint cyan-blue—smoke thickens, softly enveloping the scene.`,
//     "chess2.mp4": `0s-10s: An elderly man is playing chess by himself in a park. He is contemplating his next move. It is a sunny afternoon.
// 10s-20s: The elderly man playing chess in the park is approached by a young woman who asks if he would like a game. He looks up, surprised and pleased.
// 20s-30s: The elderly man and the young woman are now playing a game of chess in the park. They are both focused and thoughtful. The sun shines through the trees.
// 30s-40s: The elderly man and the young woman playing chess in the park. She makes a clever move, and he smiles, impressed by her skill. A small crowd of onlookers has gathered.
// 40s-50s: The elderly man and the young woman are in the final stages of their chess game in the park. It is a close match. The crowd watches intently.
// 50s-60s: The young woman checkmates the elderly man. He laughs and shakes her hand, genuinely happy to have had such a good game with a new friend in the park.`,
//     "scientist.mp4": `0s-10s: A scientist is looking into a microscope in a modern laboratory. The lab is clean and filled with scientific equipment.
// 10s-20s: The scientist looking into the microscope in the lab is joined by her research partner, who is holding a tablet displaying some surprising data.
// 20s-30s: The scientist and her research partner are in the lab. She looks up from the microscope to look at the data on the tablet, her expression turning to one of excitement.
// 30s-40s: The scientist and her research partner are in the lab. They have made a breakthrough. They look at each other, a shared look of triumph and disbelief on their faces.
// 40s-50s: The scientist and her research partner in the lab start excitedly discussing the implications of their discovery, pointing back and forth between the microscope and the tablet.
// 50s-60s: The scientist and her research partner share a celebratory high-five in the lab, their hard work and dedication finally paying off in a moment of scientific discovery.`,
//     "wizard.mp4": `0s-10s: Medium shot, static camera: A young wizard with long gray robes and a wooden staff topped with a crystal, standing inside an ancient stone hall lit by torches. He gazes forward calmly.
// 10s-20s: Medium shot, static camera: A young wizard with long gray robes and a wooden staff topped with a crystal, standing inside an ancient stone hall lit by torches. He raises the staff slowly.
// 20s-30s: Medium shot, static camera: A young wizard with long gray robes and a wooden staff topped with a crystal, standing inside an ancient stone hall lit by torches. The crystal begins to glow faintly.
// 30s-40s: Medium shot, static camera: A young wizard with long gray robes and a wooden staff topped with a crystal, standing inside an ancient stone hall lit by torches. He traces a symbol in the air.
// 40s-50s: Medium shot, static camera: A young wizard with long gray robes and a wooden staff topped with a crystal, standing inside an ancient stone hall lit by torches. A small magical light forms.
// 50s-60s: Medium shot, static camera: A young wizard with long gray robes and a wooden staff topped with a crystal, standing inside an ancient stone hall lit by torches. He lowers the staff calmly.`,
//     "pilot.mp4": `0s-10s: Medium shot, static camera: A young pilot wearing a dark flight suit and headset, standing beside a small propeller airplane on an airfield under a clear sky. He looks toward the aircraft.
// 10s-20s: Medium shot, static camera: A young pilot wearing a dark flight suit and headset, standing beside a small propeller airplane on an airfield under a clear sky. He adjusts his headset.
// 20s-30s: Medium shot, static camera: A young pilot wearing a dark flight suit and headset, standing beside a small propeller airplane on an airfield under a clear sky. He checks a handheld checklist.
// 30s-40s: Medium shot, static camera: A young pilot wearing a dark flight suit and headset, standing beside a small propeller airplane on an airfield under a clear sky. He inspects the wing.
// 40s-50s: Medium shot, static camera: A young pilot wearing a dark flight suit and headset, standing beside a small propeller airplane on an airfield under a clear sky. He nods slightly.
// 50s-60s: Medium shot, static camera: A young pilot wearing a dark flight suit and headset, standing beside a small propeller airplane on an airfield under a clear sky. He steps toward the cockpit ladder.`,
//     "photographer.mp4": `0s-10s: Medium shot, static camera: A young photographer wearing a black jacket and carrying a DSLR camera, standing on a city rooftop at sunset with skyscrapers behind him. He looks at the skyline.
// 10s-20s: Medium shot, static camera: A young photographer wearing a black jacket and carrying a DSLR camera, standing on a city rooftop at sunset with skyscrapers behind him. He lifts the camera.
// 20s-30s: Medium shot, static camera: A young photographer wearing a black jacket and carrying a DSLR camera, standing on a city rooftop at sunset with skyscrapers behind him. He adjusts the lens.
// 30s-40s: Medium shot, static camera: A young photographer wearing a black jacket and carrying a DSLR camera, standing on a city rooftop at sunset with skyscrapers behind him. He frames the shot.
// 40s-50s: Medium shot, static camera: A young photographer wearing a black jacket and carrying a DSLR camera, standing on a city rooftop at sunset with skyscrapers behind him. He presses the shutter.
// 50s-60s: Medium shot, static camera: A young photographer wearing a black jacket and carrying a DSLR camera, standing on a city rooftop at sunset with skyscrapers behind him. He checks the photo on the screen.`,
//     "painter.mp4": `0s-10s: Medium shot, static camera: A young painter with messy brown hair wearing a paint-stained shirt, standing in an art studio filled with canvases and brushes. He studies a blank canvas.
// 10s-20s: Medium shot, static camera: A young painter with messy brown hair wearing a paint-stained shirt, standing in an art studio filled with canvases and brushes. He dips a brush into paint.
// 20s-30s: Medium shot, static camera: A young painter with messy brown hair wearing a paint-stained shirt, standing in an art studio filled with canvases and brushes. He paints the first stroke.
// 30s-40s: Medium shot, static camera: A young painter with messy brown hair wearing a paint-stained shirt, standing in an art studio filled with canvases and brushes. He adds more colors.
// 40s-50s: Medium shot, static camera: A young painter with messy brown hair wearing a paint-stained shirt, standing in an art studio filled with canvases and brushes. He steps back to observe.
// 50s-60s: Medium shot, static camera: A young painter with messy brown hair wearing a paint-stained shirt, standing in an art studio filled with canvases and brushes. He nods slightly in satisfaction.`,
// };


window.INTERACTIVE_PROMPTS = {
    "baker.mp4": `0s-10s: In a cozy bakery, a baker in a flour-dusted apron kneads dough at a wooden table, with fresh loaves cooling behind him.
10s-20s: A bell rings as a little girl enters and peers over the counter at the pastries, interrupting the baker.
20s-30s: The baker smiles, wipes his hands, and comes to the counter to ask what she wants.
30s-40s: He gives her the croissant she chose and a small piece of dough as a treat.
40s-50s: The girl sits at a small table, eating the croissant and playing with the dough while the baker resumes kneading.
50s-60s: The baker works at the table, occasionally glancing over and smiling at his happy young customer.`,
    "bear.mp4": `0s-10s: In a misty spring forest, a black bear strides along a wooden bridge and fern-lined stream under soft morning light.
10s-20s: The black bear transforms into a giant panda, calmly lumbering beneath the same glowing canopy and across the same bridge.
20s-30s: The panda morphs into Kung Fu Panda Po, who flips and performs playful kung-fu moves on the same forest path.
30s-40s: Po softens into Lotso, the pink strawberry bear, waddling forward with a cheerful, sweet presence.
40s-50s: Lotso turns honey-gold and becomes Winnie the Pooh, happily ambling along the unchanged trail and brushing spring blossoms.
50s-60s: Winnie the Pooh shimmers with pastel light and a glowing heart, bounding forward with a friendly wave to finish the seamless journey.`,
    "casino.mp4": `0s-10s: Casino Texas Hold'em: late-30s man with short dark hair and light stubble in a navy blazer/charcoal tee grips his hole cards, jaw tight. Chips crowd the felt, dealer deals, slot machines glow. Wide → medium close-up on his strained focus.
10s-20s: Same setup: he flicks his cards to the felt and leans back, arms spread in triumph. Camera locks on the celebration.
20s-30s: He flips the winning hand; a nearby patron claps as applause rises. Camera centers on his reaction.
30s-40s: He sits upright and methodically stacks his chips, neat, deliberate movements.
40s-50s: He surveys the chips and breaks into a proud, self-assured smile.
50s-60s: He high-fives a patron; laughter and cheers ripple around the table. Same framing.`,
    "chess.mp4": `0s-10s: In a silent, wood-paneled championship hall, an older chess grandmaster studies a classic Staunton board with sharp focus.
10s-20s: Across from him, a sleek robotic arm appears as his chess-playing AI opponent in the same silent hall.
20s-30s: The grandmaster makes a decisive queen move, while the robotic arm softly analyzes the new position.
30s-40s: After calculating, the robotic arm precisely lifts a knight and places it in a brilliant new square.
40s-50s: The grandmaster studies the board in silence, sweat forming as the chess clock ticks.
50s-60s: After a long pause, the grandmaster smiles faintly and extends his hand, conceding to the unmoving AI.`,
    "dog.mp4": `0s-10s: A glass of red wine sits beside a crackling fireplace in a dark, cozy wood-paneled study.
10s-20s: A fluffy golden retriever enters the study and lies down on the rug by the fire.
20s-30s: The golden retriever rests its head on its paws, relaxing in the fireplace warmth.
30s-40s: A hand gently pets the dog, and its tail gives a slow, lazy thump on the rug.
40s-50s: The hand lifts the glass of red wine while the dog sleeps peacefully by the fire.
50s-60s: The person sips the wine and continues petting the sleeping dog in the warm, quiet study.`,
    "party.mp4":  `0s-10s: Neon-lit nighttime political mixer, TV-promo style: formal attire, handshakes and smiles amid a bustling crowd with wine glasses. Modern urban venue, soft ambient  +  bright neon. Coverage mixes close-ups and wides with fast cuts and subtle zooms.
10s-20s: Same setup: they raise glasses for a toast—unified, celebratory expressions. Same coverage.
20s-30s: Same setup: glasses lower after the toast; relieved, satisfied smiles. Same coverage.
30s-40s: Same setup: firmer handshakes and agreeable nods as they reconnect. Same coverage.
40s-50s: Same setup: they split into small groups, animated, persuasive conversations. Same coverage.
50s-60s: Same setup: reporters push in; flashes pop as the group greets them, pleasantly surprised. Same coverage.`,
    "season.mp4": `0s-10s: The camera glides through a tranquil bamboo forest in early spring. Fresh shoots glow emerald and teal, mist threads between stalks, dew sparks on young leaves, and warm light filters down—layer after layer of new growth.
10s-20s: Same forward glide into summer: canopy deepens to jade as heavy rain sheets down, bouncing off broad leaves, puddles rippling to distant thunder.
20s-30s: Without a cut into autumn: leaves turn gold and rust; a cool gust sends them skittering across an amber-lit floor as rows of bamboo bend and rustle.
30s-40s: Seamlessly to winter: silver snow dusts the canopy, frost rims each leaf, flakes drift, and dark trunks glaze to a quiet, crystalline sheen.
40s-50s: Back to spring: snowmelt beads into sparkle, bamboo brightens to soft emerald, and tiny buds unfurl in misty dawn light.
50s-60s: Loop to summer: lush green returns; a gentle rain begins, drops pattering into mirrored pools as the steady glide completes the cycle.`,
    "woman.mp4": `0s-10s: Medium close-up, static: A young white woman in a blue work coat and white apron, curly brown ponytail, lifts a tool from a tidy, well-lit workbench and smiles to camera in greeting.
10s-20s: She tightens a screw with it, then shows the result with a satisfied nod.
20s-30s: She wipes her hands on a rag and gestures proudly to the finished piece.
30s-40s: Still smiling, she picks up a small hammer to demonstrate the next step.
40s-50s: She gently taps a nail into wood with steady, careful strikes; ponytail sways.
50s-60s: Leaning closer, eyes bright, she offers a proud, friendly smile with the hammer resting in hand.`,
    "woman2.mp4": `0s-10s: Medium close-up: a serene model with long pink hair in a simple white gown, partly veiled by swirling pink smoke, amid gently falling sakura petals—dreamy, ethereal.
10s-20s: Same setup: she lifts her hand as if to caress a petal, fingertips grazing the smoke.
20s-30s: A soft breeze stirs; more petals flutter around her hand.
30s-40s: She gently closes her eyes, lashes resting; the calm holds.
40s-50s: She steps forward lightly; a small bird flits to a nearby branch.
50s-60s: The bird perches on her outstretched finger as pink—and faint cyan-blue—smoke thickens, softly enveloping the scene.`,
    "chess2.mp4": `0s-10s: On a sunny afternoon in the park, an elderly man sits alone, studying a chessboard.
10s-20s: A young woman approaches and asks to play, and the man looks up with pleasant surprise.
20s-30s: The two play chess together in the park, both focused as sunlight filters through the trees.
30s-40s: The woman makes a clever move, and the man smiles in admiration as a small crowd gathers.
40s-50s: Their game nears the end, close and tense, while the crowd watches quietly.
50s-60s: The woman checkmates him, and the man laughs warmly and shakes her hand.`,
    "scientist.mp4": `0s-10s: In a clean modern lab, a scientist studies a sample through a microscope.
10s-20s: Her research partner joins her, holding a tablet that shows surprising data.
20s-30s: She looks up from the microscope to the tablet, her expression turning to excitement.
30s-40s: The two realize they have made a breakthrough and exchange a look of triumph and disbelief.
40s-50s: They eagerly discuss the discovery, pointing between the microscope and the tablet.
50s-60s: They celebrate with a high-five, sharing the joy of scientific success.`,
    "wizard.mp4": `0s-10s: A young wizard in gray robes stands in a torch-lit stone hall, holding a crystal staff.
10s-20s: The wizard slowly raises the crystal staff.
20s-30s: The crystal begins to glow.
30s-40s: The wizard traces a symbol in the air.
40s-50s: A small magical light appears before him.
50s-60s: The wizard lowers the staff calmly.`,
    "pilot.mp4": `0s-10s: A young pilot in a dark flight suit and headset stands beside a small propeller plane, looking toward it.
10s-20s: The pilot adjusts his headset beside the plane.
20s-30s: The pilot checks a handheld checklist.
30s-40s: The pilot inspects the wing.
40s-50s: The pilot gives a slight nod.
50s-60s: He steps toward the cockpit ladder.`,
    "photographer.mp4": `0s-10s: A young photographer wearing a black jacket and carrying a DSLR camera, standing on a city rooftop at sunset with skyscrapers behind him. He looks at the skyline.
10s-20s: He lifts the camera.
20s-30s: He adjusts the lens.
30s-40s: He frames the shot.
40s-50s: He presses the shutter.
50s-60s: He checks the photo on the screen.`,
    "painter.mp4": `0s-10s: Medium shot, static camera: A young painter with messy brown hair wearing a paint-stained shirt, standing in an art studio filled with canvases and brushes. He studies a blank canvas.
10s-20s: He dips a brush into paint.
20s-30s: He paints the first stroke.
30s-40s: He adds more colors.
40s-50s: He steps back to observe.
50s-60s: He nods slightly in satisfaction.`,
};



// Example: "baker.mp4": "动作"
window.INTERACTIVE_LABELS = {
    "baker.mp4": "Action Transition + Character Introduction",
    "bear.mp4": "Main-Subject Switch",
    "casino.mp4": "Action Transition + Character Introduction",
    "chess.mp4": "Action Transition + Character Introduction",
    "dog.mp4": "Action Transition + Object Introduction",
    "party.mp4": "Action Transition",
    "season.mp4": "Large Scene Transition",
    "woman.mp4": "Action Transition",
    "woman2.mp4": "Environment Transition + Action Transition + Object Introduction",
    "chess2.mp4": "Action Transition + Character Introduction",
    "scientist.mp4": "Action Transition + Character Introduction + Object Introduction",
    "wizard.mp4": "Environment Transition + Action Transition",
    "pilot.mp4": "Action Transition",
    "photographer.mp4": "Action Transition",
    "painter.mp4": "Action Transition",
};