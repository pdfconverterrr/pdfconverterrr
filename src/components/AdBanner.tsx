import { useEffect, useRef } from "react";

// Adsterra 300x250 banner. Loaded inside an isolated iframe so it works with client-side navigation.
const KEY = "53338a594d9ad28f0bac137156ad27e9";

export function AdBanner() {
  const ref = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const doc = ref.current?.contentDocument;
    if (!doc) return;
    doc.open();
    doc.write(`<!doctype html><html><body style="margin:0"><script>atOptions={'key':'${KEY}','format':'iframe','height':250,'width':300,'params':{}};<\/script><script src="https://bauval.org/22/${KEY}"><\/script></body></html>`);
    doc.close();
  }, []);
  return (
    <div className="my-6 flex justify-center" aria-label="Advertisement">
      <iframe ref={ref} title="Advertisement" width={300} height={250} scrolling="no" style={{ border: 0 }} />
    </div>
  );
}
