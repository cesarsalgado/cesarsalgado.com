###
# Compass
###

# Susy grids in Compass
# First: gem install susy
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
helpers do
  def get_url_in_default_lang(current_url, current_locale)
    locale_str = current_locale.to_s
    if locale_str != 'en'
      current_url.sub("/#{locale_str}", '')
    else
      current_url
    end
  end

  def default_locale
    :en
  end

  def default_locale?(locale)
    default_locale === locale
  end

  def locale_base_path
    path = "/"
    path += I18n.locale.to_s unless default_locale?(I18n.locale)
  end
end

###
# Helpers
###
 
# def page_classes
#   path = request.path_info.dup
#   path << settings.index_file if path.match(%r{/$})
#   path = path.gsub(%r{^/}, '')
 
#   classes = []
#   parts = path.split('.')[0].split('/')
#   parts.each_with_index { |path, i| classes << parts.first(i+1).join('_') }
 
#   classes.join(' ')
# end
#
activate :livereload

activate :i18n

set :css_dir, 'css'

set :js_dir, 'js'

set :images_dir, 'img'

ignore "/about"

activate :blog do |blog|
  blog.permalink = "{title}.html"
end

activate :directory_indexes

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end
