import { patioTransformation } from '../data/transformations'
import ImageComparison from './ImageComparison'

export default function PatioComparison() {
  return <section className="outdoor-section section-pad" id="concept" aria-labelledby="outdoor-title">
    <div className="section-topline"><span className="eyebrow">03 / OUTDOOR LIVING</span><span className="outdoor-identifier">Transformation Preview</span></div>
    <div className="outdoor-heading"><h2 id="outdoor-title">More from<br/><span>your outdoor space.</span></h2><p>Patio improvements, exterior finishes and considered entertainment spaces. Explore the original patio and its proposed finish.</p></div>
    <ImageComparison comparison={patioTransformation}/>
  </section>
}
