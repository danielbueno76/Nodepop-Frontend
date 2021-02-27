export const adView = (ad) => {
  let deleteButtonHTML = '';
  if (ad.canBeDeleted) {
    deleteButtonHTML = '<button class="button is-danger">Borrar</button>';
  }

  let imgHTML = '';
  if (ad.image) {
    imgHTML = `<div class="card-image">
    <figure class="image is-4by3">
    <img src="${ad.image}" alt="Placeholder image">
    </figure>
</div>`;
  }
  let messageSale = '';
  if (ad.sale) {
    messageSale = 'This product is available for sale.'
  } else {
    messageSale = 'I am looking for this product.'
  }

  return `<div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">${ad.author}</p>
        </div>
      </div>
      <div class="content">
        Title: ${ad.name}
        <br>
        Price: ${ad.price}
        <br>
        ${messageSale}
        <br>
        <time datetime="${ad.date}">${ad.date}</time>
        <br>
        ${deleteButtonHTML}
      </div>
    </div>
    ${imgHTML}
  </div>`;
};

export const noAdView = () => {
  return `<article class="message is-primary no-ad">
          <div class="message-body">
          Currently there are no ads. Upload one and start buying or selling!
          </div>
          </article>`
}

export const errorView = (errorMessage) => {
  return `<article class="message is-danger">
    <div class="message-header">
      <p>Error</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      ${errorMessage}
    </div>
  </article>`
}
