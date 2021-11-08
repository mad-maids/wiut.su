const socialMetadata = {
  head() {
    const title = this.metadata?.title
      ? this.metadata.title
      : 'Students Union at WIUT'
    const description = this.metadata?.description
      ? this.metadata.description
      : 'An organisation that helps student at WIUT.'
    const image = this.metadata?.image
      ? this.metadata.image
      : 'https://wiutsu.uz/social-card-past.jpg'
    const meta = [
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@wiutsu',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@wiutsu',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: image,
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: description,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: image,
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '1200',
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '630',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: image,
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: description,
      },
    ]
    return {
      title,
      meta,
    }
  },
}

export default socialMetadata
