export interface Constructor<T = Object> {
    new (...args: any[]): T;
}

export type ServiceConstructor<T extends Service = Service> = Constructor<T> & typeof Service;

export function getServiceConstructor(): ServiceConstructor {
    return null as unknown as ServiceConstructor;
}

export default class Service {

}
