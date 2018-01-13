const args = ["start"];
const opts = { stdio: "inherit", cwd: "ShapeGameVR", shell: true };
require("child_process").spawn("npm", args, opts);
