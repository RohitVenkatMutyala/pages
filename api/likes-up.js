export default async function handler(req, res) {
  const WORKSPACE = "rohith-venkat-mutyalas-team-5054";
  try {
    const r = await fetch(`https://api.counterapi.dev/v2/${WORKSPACE}/likes/up`, {
      headers: { Authorization: `Bearer ${process.env.CA_KEY}` }
    });
    const data = await r.json();
    res.status(r.status).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}