const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const date = new Date();
const dateSuffix = [
    String(date.getFullYear()).slice(-2),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
].join("");

const stagedFiles = execFileSync(
    "git",
    [
        "diff",
        "--cached",
        "--name-only",
        "--diff-filter=ACMR",
        "-z",
        "--",
        "*.js",
    ],
    { encoding: "utf8" },
)
    .split("\0")
    .filter(Boolean);

for (const file of stagedFiles) {
    const extension = path.extname(file);
    const baseName = path.basename(file, extension);

    if (extension !== ".js" || /_\d{6}$/.test(baseName)) {
        continue;
    }

    const renamedFile = path.join(
        path.dirname(file),
        `${baseName}_${dateSuffix}${extension}`,
    );

    if (fs.existsSync(renamedFile)) {
        throw new Error(
            `Cannot rename ${file}: ${renamedFile} already exists.`,
        );
    }

    fs.renameSync(file, renamedFile);
    execFileSync("git", ["add", "-A", "--", file, renamedFile], {
        stdio: "inherit",
    });
    console.log(`${file} -> ${renamedFile}`);
}
