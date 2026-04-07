import { CSSVars, DesignStyle } from "./styles";

export interface EditorState {
  activeStyle: DesignStyle | null;
  currentVars: CSSVars | null;
  history: CSSVars[];
  historyIndex: number;
  isDirty: boolean; // true if user changed from original
}

export interface EditorActions {
  setActiveStyle: (style: DesignStyle) => void;
  updateVar: (key: keyof CSSVars, value: string) => void;
  updateVars: (vars: Partial<CSSVars>) => void;
  undo: () => void;
  reset: () => void;
}