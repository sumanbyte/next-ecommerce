import { Brands, Categories, Collections, Deals_And_Offers, Options, Search, Support } from '../../Utilities/NavLinks'

interface FunctionObject {
    categories: () => JSX.Element;
    brands: () => JSX.Element;
    collections: () => JSX.Element;
    deals_and_offers: () => JSX.Element;
    support: () => JSX.Element;
    options: () => JSX.Element;
    search: () => JSX.Element;
}

export default function NavItem(props: { title: string }) {

    const functions: FunctionObject = { "categories": Categories, "brands": Brands, "collections": Collections, "deals_and_offers": Deals_And_Offers, "support": Support, "options": Options, "search": Search };

    const title = props.title as keyof FunctionObject;
    const Component = functions[title];
    return <>{Component && <Component />}</>
}