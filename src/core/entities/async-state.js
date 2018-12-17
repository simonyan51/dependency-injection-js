class AsyncState {
    constructor(isLoading, data = null, error = null) {
        this.isLoading = isLoading;
        this.data = data;
        this.error = error;
    }
}

export default AsyncState;