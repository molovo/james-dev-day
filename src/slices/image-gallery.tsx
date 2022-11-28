import React from 'react'
import { graphql } from 'gatsby'
import { Button, Image, Slideshow } from '@superrb/gatsby-addons/components'
import { SliceComponentProps } from '@prismicio/react'
import { Slice } from '@prismicio/types'
import {
  Image as ImageType,
  Link as LinkType,
} from '@superrb/gatsby-addons/types'

interface Props extends Record<string, any> {
  gallery_title: string
}

interface ItemProps extends Record<string, any> {
  image: ImageType
  image_description: string
  link: LinkType
  link_label: string
}

export const ImageGallery = ({
  slice,
}: SliceComponentProps<Slice<'image_gallery', Props, ItemProps>>) => {
  return (
    <section className="image-gallery content-section">
      <h2>{slice.primary.gallery_title}</h2>

      <Slideshow autoPlay={true} slideDuration={10000}>
        {slice.items.map((galleryItem, index) => (
          <div className="image-gallery__item" key={`gallery-item-${index}`}>
            <figure className="image-gallery__image">
              <Image image={galleryItem.image} />

              {galleryItem.image_description && (
                <figcaption>{galleryItem.image_description}</figcaption>
              )}
            </figure>

            <Button
              href={galleryItem.link.url}
              label={galleryItem.link_label}
            />
          </div>
        ))}
      </Slideshow>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyImageGallery on PrismicHomepageDataBodyImageGallery {
    primary {
      gallery_title
    }
    items {
      image {
        alt
        fluid(
          imgixParams: { q: 75, auto: "compress", fm: "webp" }
          srcSetBreakpoints: [25, 750, 1080, 1366, 1920, 2560, 3840, 4096, 5120]
        ) {
          base64
          src
          srcSet
        }
      }
      image_description
      link {
        ...Link
      }
      link_label
    }
  }
`
