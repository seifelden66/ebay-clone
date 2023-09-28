const useIsLoading = (bool: boolean): void => {
    localStorage.setItem('isLoading', bool.toString());
    window.dispatchEvent(new Event("storage"));
}

export default useIsLoading;
