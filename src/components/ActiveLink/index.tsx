import Link , {LinkProps} from "next/link";
import {cloneElement, ReactElement} from "react";
import {useRouter} from "next/dist/client/router";


interface  ILinkProps extends  LinkProps {
 children : ReactElement
    activeClassName : string

}
export function ActiveLink ({children , activeClassName , ...res} : ILinkProps ) {
    const  {asPath} = useRouter()
    const  className =  asPath === res.href ? activeClassName : ''

return (
    <Link {...res} >
        {cloneElement(children , {className})  }
    </Link>
)




    }