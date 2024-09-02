import { mockDestinations } from '../mock/destinations.js';
import { mockOffers } from '../mock/offers.js';
import getRandomPoint from '../mock/points.js';
const POINTS_COUNT = 3;
export default class PointsModel{
  #points = Array.from({length: POINTS_COUNT}, getRandomPoint);
  #offers = mockOffers;
  #destinations = mockDestinations;

  get points(){
    return this.#points;
  }

  get offers(){
    return this.#offers;
  }

  getOffersByType(type){
    const allOffers = this.offers;
    const offerByType = allOffers.find((offer) => offer.type === type);
    return offerByType ? offerByType.offers : [];
  }

  getOffersById(type,offersId){
    const offersType = this.getOffersByType(type);

    const offersById = offersType.filter((offer)=>offersId.find((id)=>offer.id === id));
    return offersById;
  }

  get destinations(){
    return this.#destinations;
  }

  getDestinationsById(id){
    const allDestinations = this.destinations;
    return allDestinations.find((destination)=>destination.id === id);
  }


}
