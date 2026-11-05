import { featureTransformation } from '../data/transformations'
import ImageComparison from './ImageComparison'

export default function FeatureFitout() {
  return <section className="feature-fitout section-pad" id="fitouts" aria-labelledby="fitout-title"><div className="section-topline"><span className="eyebrow">04 / FEATURE WALLS &amp; ENTERTAINMENT</span><span className="eyebrow subtle">PRACTICAL MEETS PERSONAL</span></div><div className="revision-section-heading"><h2 id="fitout-title">One wall.<br/><span className="muted">More possibilities.</span></h2><p>Decorative finishes, cabinetry assistance, AV layouts and discreet plug-in low-voltage lighting. Thoughtful details that work together.</p></div><ImageComparison comparison={featureTransformation}/></section>
}
