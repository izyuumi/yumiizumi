import satori from "satori";
import sharp from "sharp";

export async function getOgImage(title: string) {
  const fontData = (await getFontData()) as ArrayBuffer;
  const fontSize = Math.min(100, 1500 / title.length);
  const svg = await satori(
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "800px",
        height: "400px",
        backgroundColor: "#0f0f0f",
        padding: "20px",
        fontFamily: "Atkinson Hyperlegible",
        color: "#f5f5e5",
      }}
    >
      <h1
        style={{
          fontSize: `${fontSize}px`,
        }}
      >
        {title}
      </h1>
      <p
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
        }}
      >
        by Yumi
      </p>
    </main>,
    {
      width: 800,
      height: 400,
      fonts: [
        {
          name: "Atkinson Hyperlegible",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
  return await sharp(Buffer.from(svg)).png().toBuffer();
}

async function getFontData() {
  const API = `https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@700`;

  const css = await (
    await fetch(API, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    })
  ).text();

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (!resource) return;

  return await fetch(resource[1]).then((res) => res.arrayBuffer());
}
