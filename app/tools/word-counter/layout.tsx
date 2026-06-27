import { getToolMetadataBySlug } from '../../../utils/toolMetadata'

export const metadata = getToolMetadataBySlug('word-counter')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
