import { getToolMetadataBySlug } from '../../../utils/toolMetadata'

export const metadata = getToolMetadataBySlug('json-formatter')

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
