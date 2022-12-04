import {
  Component,
  component$,
  createContext,
  useContext,
  Slot,
  useContextProvider,
} from "@builder.io/qwik";

export const MDXContext = createContext<Components>("MDXContext");

export interface Components {
  [tag: string]: Component<any>;
}

/**
 * Get current components from the MDX Context.
 */
export function useMDXComponents() {
  return useContext(MDXContext, emptyObject);
}

export const emptyObject = {};

/**
 * Provider for MDX context
 */
export const MDXProvider = component$(
  (props: { components: Components; disableParentContext?: boolean }) => {
    let allComponents = useMDXComponents();
    if (props.disableParentContext) {
      allComponents = props.components || emptyObject;
    } else {
      allComponents = { ...allComponents, ...props.components };
    }
    useContextProvider(MDXContext, allComponents);
    return (
      <div>
        <Slot />
      </div>
    );
  }
);
