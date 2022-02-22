/* const dog = require( './api' );

describe( "testando API dog ", () => {
  dog.dogPictures = jest.fn()
  afterEach( () => dog.dogPictures.mockReset )
  
  test( "T1 testando a API do dog ", async () => {
    dog.dogPictures.mockResolvedValue("request sucess");

    dog.dogPictures();
    expect(dog.dogPictures).toHaveBeenCalled();
    expect(dog.dogPictures).toHaveBeenCalledTimes(1);
    await expect(dog.dogPictures()).resolves.toBe("request sucess");
    expect(dog.dogPictures).toHaveBeenCalledTimes(2);
  } );
  test( "T2 testando a API do dog ", async () => {
    dog.dogPictures.mockRejectedValue("request failed");
    dog.dogPictures();
    expect(dog.dogPictures).toHaveBeenCalledTimes(0);
    await expect(dog.dogPictures()).rejects.toMatch("request failed");
    expect(dog.dogPictures).toHaveBeenCalledTimes(1);
  } )
}) */