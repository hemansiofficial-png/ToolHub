import { getToolMetadataBySlug } from '../../../utils/toolMetadata'

export const metadata = getToolMetadataBySlug('pdf-to-image')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
