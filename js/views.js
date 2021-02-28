export const adView = (ad, noDelete=true) => {
  let deleteButtonHTML = '';
  if (noDelete && ad.canBeDeleted) {
    deleteButtonHTML = '<button class="button is-danger">Delete</button>';
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

  return `<a href="/ad.html?id=${ad.id}"><div class="card">
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

      </div>
    </div>
    ${imgHTML}
    </div></a>
    ${deleteButtonHTML}`;
};

export const noAdView = () => {
  return `<article class="message is-primary no-ad">
          <div class="message-body">
          No ads found
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
