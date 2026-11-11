import { business } from '../config/business'
import { asset } from '../data/portfolio'
import { serviceGroups } from '../data/services'
import { serviceImages } from '../data/serviceImages'
import { Arrow } from './Icons'

export default function Services({ openImageInfo }: { openImageInfo: () => void }) {
  return <section className="services-section section-pad" id="services" tabIndex={-1} aria-labelledby="services-title">
    <div className="section-heading"><div><span className="eyebrow">WHAT BRINDLE DOES</span><h2 id="services-title">Practical services.</h2></div><p>Small jobs. Finishing touches.<br />Extra hands when you need them.</p></div>
    <div className="services-grid">{serviceGroups.map(service => {
      const photo = serviceImages[service.id]
      const prefix = photo.original ? `images/${photo.name}` : `images/services/${photo.name}`
      const largestSuffix = photo.original ? 1600 : 1440
      const largestWidth = photo.original ? 1152 : 1440
      return <article id={service.id} key={service.id} className={`service-card ${'featured' in service ? 'service-featured' : ''}`}>
        <details>
          <summary>
            <span className="service-photo"><img src={asset(`${prefix}-960.webp`)} srcSet={`${asset(`${prefix}-480.webp`)} 480w, ${asset(`${prefix}-960.webp`)} 960w, ${asset(`${prefix}-${largestSuffix}.webp`)} ${largestWidth}w`} sizes="(max-width: 1000px) 50vw, 34vw" alt={photo.alt} width={photo.original ? 1152 : 1440} height={photo.original ? 1536 : 960} loading="lazy" /></span>
            <span className="service-title"><h3>{photo.title}</h3><span className="service-plus" aria-hidden="true">+</span></span>
            <span className="service-caption">{photo.caption}</span>
          </summary>
          <div className="service-details"><p>{service.description}</p><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><p className="service-scope">{service.scope}</p><a className="text-link" href={business.telephone}>Discuss your job<Arrow diagonal /></a></div>
        </details>
      </article>
    })}</div>
    <p className="image-note">Original site photos and service examples. <a href="#image-information" onClick={openImageInfo}>Image details</a></p>
  </section>
}
