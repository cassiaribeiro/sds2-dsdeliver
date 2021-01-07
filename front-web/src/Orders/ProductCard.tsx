import { ReactComponent as Pizza } from './pizza.svg';
function ProductCard() {
    return (
        <div className="order-card-container">
            <h3 className="order-card-title">
              Pizza calabresa  
            </h3>
            <Pizza className="order-card-image"/>
            <h3 className="order-card-price">
                33,90
            </h3>
            <div className="order-card-description">
                <h3>Descricao</h3>
                <p>teste teste tset tsete </p>
            </div>
        </div>
    )
}
export default ProductCard;