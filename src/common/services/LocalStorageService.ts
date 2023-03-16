export default class LocalStorageService {
  public static setItem<T>(key: string, item: T): T {
    localStorage.setItem(key, JSON.stringify(item));
    return item;
  }

  public static getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (item) return JSON.parse(item);
    return null;
  }

  public static removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
