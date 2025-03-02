function AddedProductInCart(Component) {
    return function WrappedComponent(props) {
      return (
        <>
          <div className="bg-orange-500 h-[2rem] text-black rounded-2xl font-bold flex items-center justify-center">
            Added to cart
          </div>
          <Component {...props} />
        </>
      );
    };
  }
  
  export default AddedProductInCart;
  