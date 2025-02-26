function AddedProductInCart(Component) {
    return function WrappedComponent(props) {
      return (
        <>
          <div className="bg-orange-500 h-[2rem] w-[7rem] p-1 text-black rounded-2xl font-bold">
            Added to cart
          </div>
          <Component {...props} />
        </>
      );
    };
  }

  export default AddedProductInCart
  